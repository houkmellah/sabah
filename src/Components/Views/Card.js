import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';
import FadeIn from 'react-fade-in';

export const Card = (props) => {
  const { data, toggleReadMore } = props;

  const getthreeFirstLine = (text) => {
    const str = text.split('\n');
    const newStr = `
            ${str[0]}
            ${str[1]}
            ${str[2]}
            ${str[3]}
        `;
    return newStr;
  };

  const onClickReadMore = () => {
    toggleReadMore(data.id);
  };

  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + `/images/${data.image}`}
          alt="test"
        />
        <FadeIn>
          <div className="card-body smooth-text">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text  text-right ">
              {' '}
              {!data.readMore && (
                <FadeIn> {parse(`${getthreeFirstLine(data.text)}...`)} </FadeIn>
              )}{' '}
            </p>
            <p className="card-text  text-right ">
              {' '}
              {data.readMore && <FadeIn>{parse(`${data.text}`)}</FadeIn>}
            </p>
            <a
              onClick={onClickReadMore}
              type="button"
              className="btn "
              id="read"
            >
              {' '}
              تابع القراءة
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export const List = (props) => {
  const { datas } = props;
  const [data_, setData] = useState([]);

  useEffect(() => {
    setData(props.datas.map((m) => ({ ...m, readMore: false })));
  }, []);

  const toggleReadMore = (id) => {
    console.log('toggle', id);
    let new_table = [];
    for (let i in data_) {
      if (datas[i].id === id) {
        new_table.push({ ...datas[i], readMore: !data_[i].readMore });
      } else {
        new_table.push({ ...datas[i], readMore: false });
      }
    }

    console.log(new_table);

    setData(new_table);
  };
  return (
    <div className="grid-card">
      {data_.map((data) => (
        <Card key={data.id} data={data} toggleReadMore={toggleReadMore} />
      ))}
    </div>
  );
};

export default Card;
