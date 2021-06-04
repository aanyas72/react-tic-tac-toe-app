const Box = ({ classNames, value, addToArray }) => (
        <div
            className={classNames}
            onClick={() => addToArray()}
            style={{color: value === 'X' ? 'rgb(159, 226, 191)' : 'rgb(233, 116, 81)'}}
        >{value}</div>
);

export default Box;