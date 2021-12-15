import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,  onAuthStateChanged, signInWithPopup, signOut, updateProfile, getIdToken } from 'firebase/auth'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import initializeFirebase from '../firebase/firebase.init'

initializeFirebase();

const useFirebase = () => {
    const [ user, setUser ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ authError, setAuthError ] = useState('')
    const [ admin, setAdmin ] = useState(false)
    const [ token, setToken ] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // code for User 1st time registration
    const userRegistration = (email, password, name, history) => {
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = {email, displayName: name}

                setAuthError('')
                setUser(newUser)

                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // updated

                }).catch((error) => {
                    setAuthError(error.message)
                });
                history.replace('/')
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // code for registered user sign-in
    const userSignIn = (email, password, location, history) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // code for sign-in/sign-up with goolge mail
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/'
                history.replace(destination)
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false))
    }

    // code for user sign-out
    const userSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                Swal.fire("Sign Out Successfully")
            })
            .then(() => setIsLoading(true))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http:localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    // function for saving new user data to database (mongodb)
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])



    // sending functions for clients
    return { signInWithGoogle, userSignOut, userRegistration, userSignIn, user, isLoading, admin, authError, token }

}

export default useFirebase