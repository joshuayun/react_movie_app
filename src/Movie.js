import React, {Component} from 'react';
import ProtoTypes from 'prop-types'
import './Movie.css';
import LineEllipsis from 'react-lines-ellipsis'

/*
class Movie extends Component {
    static protoTypes = {
        title: ProtoTypes.string.isRequired,
        poster: ProtoTypes.string.isRequired
    }

    render(){
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
            )
    }
}

class MoviePoster extends Component {

    static protoTypes = {
        poster : ProtoTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}
*/


//state가 없을때에는 클래스방식이 아닌 함수방식으로 구현가능
//render와 라이프사이클도 없음 

function Movie({title, poster, genres, synopsis}){  
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LineEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
        )
}

function MoviePoster({poster, alt}){   
    return(
        <img src={poster} alt={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){   
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.prototype = {
    title: ProtoTypes.string.isRequired,
    poster : ProtoTypes.string.isRequired,
    genres : ProtoTypes.array.isRequired,
    synopsis : ProtoTypes.string.isRequired
}

MoviePoster.prototype = {
    poster : ProtoTypes.string.isRequired,
    alt : ProtoTypes.string.isRequired
}

MovieGenre.prototype = {
    genre : ProtoTypes.string.isRequired
}


export default Movie;