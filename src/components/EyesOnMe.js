// Code EyesOnMe Component Here
const EyesOnMe = () => {

    const handleFocus = (event) => {
        console.log("Good!")
    }

    const handleBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    return (
        <>
         <button onFocus={ handleFocus } onBlur={ handleBlur }>Eyes on me</button>
        </> 
    )
}

export default EyesOnMe