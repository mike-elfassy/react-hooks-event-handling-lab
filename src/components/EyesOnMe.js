// Code EyesOnMe Component Here

function EyesOnMe (){
    const handleFocus = function(event) {
        console.log('Good!')
    }

    const handleBlur = function(event) {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button
                onFocus={handleFocus}
                onBlur={handleBlur}
            >Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;