import {articles} from '../../../data'

export default function handler({query: {id}},res){
    const filtered = articles.filter(article => article.id === id);

    if(filtered.length > 0){
        res.send(200).json(filtered[0]);
    }
    else{
        res.send(404).json({message: `Article with the id of ${id} not found`})
    }
}