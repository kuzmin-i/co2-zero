const FrameItem = ({title, comment, number}) => {
    return (
        <div className="charttable__framerow">
            <div className="charttable__firstcol">
                <div className="charttable__rowcomponent">
                    <div className="charttable__rowtitle">{title}</div>
                    <div className="charttable__rowcomment">{comment}</div>
                </div>
            </div>
            <div class="charttable__lastcol">
                <div class="charttable__totnumber">{number}</div>
            </div>
        </div>
    )
}

export default FrameItem