import React , { Component , Fragment , state} from 'react';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            task: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTarea = this.addTarea.bind(this);
    }
    addTarea(e){
        if(this.state._id) {
                fetch(`/api/tareas/${this.state._id}` , {
                    method: 'PUT',
                    body:  JSON.stringify(this.state),
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    }  
                  .then(res => res.json())
                  .then(data => {
                      M.toast({html: 'Tarea editada'})
                      this.setState({title: '' , description: '' , _id: '' })
                      this.fetchtarea();    
                  })
                })
        } else {
            fetch('/api/tareas', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }  
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'La terea fue guardada'})
                this.setState({title: '', description: ''})
                this.fetchtarea();
            })
            .catch(err => console.log(err))
        }
        e.preventDefault();
    }
    componentDidMount(){
        this.fetchtarea()
    }
    fetchtarea(){
        fetch('/api/tareas')
        .then(res => res.json())
        .then(data => {
            
            this.setState({task: data})
            this.state.task
        })
        .catch(err => cosole.log(err))
    }
    deleteTarea(id){
       if(confirm('Seguro que quieres eliminar esta tarea?')){
        fetch(`/api/tareas/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }  
        })
        console.log(data)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(data => {
            M.toast({html: 'Tarea eliminada'});
            this.fetchtarea();

        })
       }
    }
    editTarea(id) {
      fetch(`/api/tareas/${id}`)
      .then(res => res.json())
      .catch(err => cosole.log(err))
      .then(data => {
          this.setState({
              title: data.title,
              description : data.description,
              _id: data._id
          })
      })
    }
    handleChange(e){
       const { name , value} = e.target;
       this.setState({
           [name] : value
       });
    }
    render(){
        return(
            <Fragment>
            <div className="container">
            <div className="row">
                <div className="col s5">
                     <div className="card">
                         <div className="card-content">
                             <form onSubmit={this.addTarea}>
                                 <div className="row">
                                     <div className="input-field col s12">
                                         <input name="title" value={this.state.title} type="text" onChange={this.handleChange} placeholder="Ingrese nombre de la tarea" />

                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="input-field col s12">
                                         <textarea name="description" value={this.state.description} type="text" onChange={this.handleChange} placeholder="Ingrese la decripcionS" className="materialize-textarea"></textarea>

                                     </div>
                                 </div>
                                 <button className="btn blue-grey darken-3" type="submit">Crear tarea <i className="material-icons right">send</i></button>
                             </form>
                         </div>
                     </div>
                </div>
                <div className="col s7">
                    <table>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                            </tr>
                            </thead>
                            <tbody>
                               {
                                   this.state.task.map(task => {
                                       return (
                                           <tr key={task._id}>
                                               <td>{task.title}</td>
                                               <td>{task.description}</td>
                                               <td>
                                                   <button className="btn green darken-2"onClick={() => this.editTarea(task._id)} ><i className="material-icons">create</i></button>
                                                   </td>
                                                   <td>
                                                   <button className="btn red accent-4" onClick={() => this.deleteTarea(task._id)} style={{margin:'4px'}}><i className="material-icons">delete</i></button>
                                               </td>

                                           </tr>
                                       )
                                   })
                               }
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Fragment>
        )}}
        export default  For