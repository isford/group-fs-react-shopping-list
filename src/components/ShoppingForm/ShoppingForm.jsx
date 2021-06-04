function ShoppingForm () {
    return (
        <>
        <form>
            <label for="itemInput"> Item: </label>
            <input type="text" id="itemInput"/>

            <label for="quantityInput"> Quantity: </label>
            <input type="text" id="quantityInput"/>

            <label for="unitInput"> Unit: </label>
            <input type="text" id="unitInput"/>

            <input type="submit" value="Save"/>

        </form>
        </>
    )
}

export default ShoppingForm;