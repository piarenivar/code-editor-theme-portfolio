import styles from '../styles/modules/Pages.module.css';

export default function CardStack({ id, stack }) {
    return (
        <div className={styles.card_stack}>
            {
                stack.map((stackItem, id) => {
                    return <span className={styles.card_stack_item} key={id}>{stackItem}</span>
                })
            }
        </div>
    )
}
