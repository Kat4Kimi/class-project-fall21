import { ListConsumer } from '../../providers/ListProvider';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AllList = () => (
  <ListConsumer>
    { value => (
      <>
        <List divided relaxed>
          {value.lists.map( l => 
            <Link to={{
              pathname: `/lists/${l.id}`,
              state: {
                ...l
              }
            }}>
              <List.Item>
                <List.Content>
                  <List.Header>{l.title}</List.Header>
                </List.Content>
              </List.Item>
            </Link>
          )}
        </List>
      </>
    )}
  </ListConsumer>
)

export default AllList;