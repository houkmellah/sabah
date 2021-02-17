import React , { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';

const customStyle = {
    gridGap: '0px !important',
    paddingTop:0,
    paddingBottom:0
}
export const Card = props => {
    const { data } = props
    const [readMore, setReadMore] = useState(false)

    const getthreeFirstLine = (text) => {
        const str = text.split('\n')
        const newStr = `
            ${str[0]}
            ${str[1]}
            ${str[2]}
            ${str[3]}
        `
        return newStr
    }
    return (
        <div>
            <div className="card" >
                <img className="card-img-top" 
                    src={process.env.PUBLIC_URL + `/images/${data.image}`}/>
                    <div className="card-body smooth-text">
                        <h5 className="card-title">{data.title}</h5>
                    <p className="card-text  text-right "> {!readMore && parse(`${getthreeFirstLine(data.text)}...`)} </p>
                    <p className="card-text  text-right "> {readMore && parse(`${data.text}`)} </p>
                    <a onClick={() => setReadMore(!readMore)} type="button" className="btn " id="read"> تابع القراءة</a>
                        
                    </div>
            </div>
        </div>
        
    )
};

export const List = props => {
    const { datas } = props

    return (
            <div className="grid-card">
            {datas.map(data => <Card data={data}/>)}     
            </div>
        )}


export default Card
