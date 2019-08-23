import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { HOME_PAGE } from 'client/queries';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`}
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative; 
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;
`;

const Album = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Loading Error';
  }

  return (
    <Fragment>
      {
        data && data.albums && data.albums.map((item) => {
          return (
            <Link to={`/details/${item.id}`}>
              <Card>
                <Title>
                  {item.title}
                </Title>
              </Card>
            </Link>
          );
        })
      }
    </Fragment>
  );
};
export default Album;
