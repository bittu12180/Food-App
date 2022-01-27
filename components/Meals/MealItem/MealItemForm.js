import { useRef ,useState} from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid]= useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;  // it always give string value
        const enteredAmountNumber = +enteredAmount; //for converting string into number
console.log(+enteredAmount);
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>please enter valid amount(1-5).</p>}
        </form>
    );

}
export default MealItemForm;