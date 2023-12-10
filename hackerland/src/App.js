// const list=[
//   {
//     title: 'React',
//     url: 'https://reactjs.org',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectId: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://reduxjs.org',
//     author: 'Deven Kalra, Anchit Kalra',
//     num_comments: 4,
//     points: 5,
//     objectId: 1,

import React from "react";
//import Header from "./components/Header";
import {Card, Col, Row} from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";

//   }
// ]

// const useSemiPersistentState = (initialState) => {
//   const [searchTerm, setSearchTerm] = React.useState(
//     localStorage.getItem('search') || initialState
// );
//   React.useEffect(() => {
//     localStorage.setItem('search', searchTerm);
//   }, [searchTerm]);
//   return [searchTerm, setSearchTerm];
// };




function App() {
    const initialStories = [
        {
            title: 'React',
            url: 'https://reactjs.org',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectId: 0,
        },
        {
            title: 'Redux',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 1,

        },
        {
            title: 'Python',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 2,

        },
        {
            title: 'Java',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 3,

        }
        , {
            title: 'Spring',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 4,

        },
        {
            title: 'Hibernate',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 5,

        },
        {
            title: 'Psychology',
            url: 'https://reduxjs.org',
            author: 'Deven Kalra, Anchit Kalra',
            num_comments: 4,
            points: 5,
            objectId: 6,

        }

    ]

    const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

    const storiesReducer = (state, action) => {
        switch (action.type) {
            case 'STORIES_FETCH_INIT':
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                };
            case 'STORIES_FETCH_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload,
                };
            case 'STORIES_FETCH_FAILURE':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                };
            case 'REMOVE_STORY':
                return {
                    ...state,
                    data: state.data.filter(
                        (story) => action.payload.objectID !== story.objectID
                    ),
                };
            default:
                throw new Error();
        } };


    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'react');

    const [url, setUrl] = React.useState(
        `${API_ENDPOINT}${searchTerm}`
    );

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        setUrl(`${API_ENDPOINT}${searchTerm}`);
        event.preventDefault();
    };


    const [stories, dispatchStories] = React.useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
    );
    const handleFetchStories = React.useCallback(async () => {
        dispatchStories({ type: 'STORIES_FETCH_INIT' });
        try {
            const result = await axios.get(url);
            dispatchStories({
                type: 'STORIES_FETCH_SUCCESS',
                payload: result.data.hits,
            });
        }catch {
            dispatchStories({type: 'STORIES_FETCH_FAILURE'});
        }
    }, [url]);


    React.useEffect(() => {
     handleFetchStories();
    }, [handleFetchStories]);

    //const searchedStories = stories.data.filter((story) => story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    const handleRemoveStory = (item) => {
        dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
        });
    };
    return (
        <div>

            <h1>Cleo Portal</h1>
            <SearchForm
                searchTerm={searchTerm}
                onSearchInput={handleSearchInput}
                onSearchSubmit={handleSearchSubmit}
            />
                <hr/>
                { stories.isError && <p>Something went wrong ...</p> }
                {stories.isLoading
                    ?
                    ( <p>Loading</p>)
                    :
                    (<List list={ stories.data } onRemoveItem={ handleRemoveStory }/> )
                }

            <hr/>


        </div>
);
}

//Custom Hook
const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );
    //Hook->All items beginning with use mean a hook
    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
};

const SearchForm = ({
                        searchTerm,
                        onSearchInput,
                        onSearchSubmit,
                    }) => (
    <form onSubmit={onSearchSubmit}>
        <SearchWithLabel
            id="search"
            value={searchTerm}
            isFocused
            onInputChange={onSearchInput}
        >
            <strong>Search:</strong>
        </SearchWithLabel>
        <button type="submit" disabled={!searchTerm}>
            Submit
        </button>
    </form>
);
const SearchWithLabel = ({
                             id,
                             value,
                             type = 'text',
                             onInputChange,
    isFocussed,
                             children,
                         }) => {
    const inputRef=React.useRef();
    React.useEffect(()=>{
        if(isFocussed && inputRef.current){
            inputRef.current.focus();
        }
    },[isFocussed]);

        return(
    <>
        <label htmlFor={ id }>{ children }</label>
        &nbsp;
        <input
            id={ id }
            ref={inputRef}
            type={ type }

            value={ value }
            onChange={ onInputChange }
        />
    </>
        )
    }
//Specialised, Not Reusable
/*
const Search = ({search,onSearch}) =>{
 console.log("Search Renders");
//  const {search,onSearch}=props;
  return(
    <>
<label htmlFor="search">Search...</label>
      <input id="search" type="text" value={search} onChange={onSearch}/>
      <p>
        Searching for <strong>{search}</strong>
      </p>
      </>
  )
}
*/


const List = ({list,onRemoveItem}) => {
    console.log('List Renders');
    return (
        <Row md={2} xs={1} lg={3} className="g-3">


                { list.map((item) => (
                        <Col key={ item.objectId }>
                            <Item item={item } onRemoveItem={onRemoveItem}/>
                        </Col>
                    )
                ) }

        </Row>
    )
}
//Passing Props
const Item = ({item,onRemoveItem}) => {
   /* const handleRemoveItem=()=>{
        onRemoveItem(item);
    }*/
    return(
    <Card className="h-100" >
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span>Title: <a href={ item.url }>{ item.title }</a></span></Card.Title>
            <Card.Text> <span><p>Author: { item.author }</p></span>
                <span><p>Comments: { item.num_comments }</p></span>
                <span><p>Points: { item.points }</p></span>

            </Card.Text>
            <span>
      <Button className="w-100 align-bottom mt-auto" onClick={ () => onRemoveItem(item) }>
        Dismiss
      </Button>
                </span>


        </Card.Body>
    </Card>
)
}
export default App;
