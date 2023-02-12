// Code Keypad Component Here

function Keypad (){
    const handleChange = function(event) {
        console.log('Entering password...')
    }

    return (
        <div>
            <input
                type="password"
                name="search"
                onChange={handleChange}
                placeholder="Enter password"
            />
        </div>
    )
}

export default Keypad;