
const Accordion = () => {
    console.log("something happended");
    let items = {
        'a': ['x', 'y', 'z'],
        'b': ['j', 'k', 'l'],
        'c': ['r', 't', 'u']
    }
    const [showIndex, setShowIndex] = useState(null);
    return (
        <div className="accordianContainer">
            {
                Object.keys(items).map((key, index) => (
                    <AccordionItems key={key} heading={key} accordionItems={items[key]}
                                    showItems={index === showIndex && true} showIndex={() => setShowIndex(index)}/>
                ))
            }
        </div>
    )
}

const AccordionItems = ({heading, accordionItems, showItems, showIndex}) => {
    const [visibility, setVisibility] = useState(false);
    return (
        <div className="text-center">
            <h1 className="border-2 bg-gray-400" onClick={
                () => {
                    showIndex()
                }
            }>{heading}</h1>
            <ul>{
                showItems && accordionItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}