import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
// import {settings} from '../../data/dataStore';

class SearchResult extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
    }

    render () {
      const {cards} = this.props;
      return (
        <section className={styles.component}>
          <Container>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </Container>
        </section>
      );
    }
}

export default SearchResult;