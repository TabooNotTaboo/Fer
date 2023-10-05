import React,{Component} from 'react'
import { Posters } from '../shared/ListOfPoster'
import PosterPresentation from './PosterPresentation'
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            Posters: Posters
        };
    }
    render() {
        return <PosterPresentation Posters={this.state.Posters}/>

    }
}
export default Main