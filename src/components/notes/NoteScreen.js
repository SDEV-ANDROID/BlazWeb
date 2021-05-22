import React, { useEffect, useRef } from 'react';
import { Combobox,SelectList } from 'react-widgets';
import { useSelector, useDispatch } from 'react-redux';
import 'react-widgets/dist/css/react-widgets.css';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    let alertWhenSelected = () => alert('selected!');
    console.log(document.getElementById("combo1"))

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { combo1,body, title, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    

    let cgallina = ['Caldo de Gallina Solo','Caldo Presa Chica', 'Caldo de Gallina Presa Grande']
    let salchi = ['Salchi Clásica','Salchi Montada', 'Salchi Molleja', 'Salchi Broaster', 'Salchi Royal', 'Salchi Achorada']
    let broaster = ["6 Alitas Broaster c/papas fritas","1/8 Broaster c/papas fritas", "1/4 Broaster c/papas fritas", "1/2 Broaster c/papas fritas", "1 Broaster Entero c/papas fritas"]
    let hamburguesa = ["Hamburguesa Clásica","Hamburguesa con queso", "Hamburguesa Royal: Con huevo y queso","Hamburguesa a lo pobre: Con huevo y plátano frito"]
    let festival = ["Salchipapero","Chifero", "Parrillero"]
    let tacos = ["Vegetariano","Chorizo", "Pollo", "Mixto"]
    let enchiladas = ["Vegetariano","Chorizo", "Pollo", "Mixto"]
    let bebidas = ["Inca kola o Coca Cola Personal","Agua Personal", "1.5L de Inca kola o Coca Cola"]
    let pago = ["Visa","Credito", "Al Contado"]

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

            <h1>Menú Principal</h1>
            
                
                <input 
                    type="text"
                    placeholder="Número del Pedido"
                    className="notes__title-input"
                    autoComplete="on"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <h3>Seleccionar Caldos de Gallina:</h3>
                <p>                    
                    <Combobox
                    id="combo1"
                    name="combo1"
                    data={cgallina}
                    onSelect={combo1}
                    
                    
                    
                    
                    />
                </p>

                <h3>Seleccionar Salchipapas:</h3>
                <p>                    
                    <Combobox
                    data={salchi}
                    
                    
                    />
                </p>
                <h3>Seleccionar Broaster:</h3>
                <p>                    
                    <Combobox
                    data={broaster}
                    
                    
                    />
                </p>
                <h3>Seleccionar Hamburguesas:</h3>
                <p>                    
                    <Combobox
                    data={hamburguesa}
                    
                    
                    />
                </p>
                <h3>Seleccionar Festival Broaster:</h3>
                <p>                    
                    <Combobox
                    data={festival}
                    
                    
                    />
                </p>
                <h3>Seleccionar Tacos:</h3>
                <p>                    
                    <Combobox
                    data={tacos}
                   
                    
                    />
                </p>
                <h3>Seleccionar Enchiladas:</h3>
                <p>                    
                    <Combobox
                    data={enchiladas}
                    
                    
                    />
                </p>
                <h3>Seleccionar Bebidas:</h3>
                <p>                    
                    <Combobox
                    data={bebidas}
                    
                    
                    />
                </p>
                
                <text
                    placeholder=""
                    className="notes__title-input"
                    name=""
                    value={""}
                   
                ></text>
                <text
                    placeholder=""
                    className="notes__title-input"
                    name=""
                    value={""}
                   
                ></text>
                <text
                    placeholder=""
                    className="notes__title-input"
                    name=""
                    value={""}
                   
                ></text>
                {/*
                <h3>Detalle del Pago</h3>
                <p>
                <label for="number">
                    <span>Pago total:</span>
                    <strong>S/.23</strong>
                    
                </label>
                
                </p>
                <text
                    placeholder=""
                    className="notes__title-input"
                    name=""
                    value={""}
                   
                ></text>
                <h4>Tipo de Pago:</h4>
                <SelectList
                    data={pago}
                    
                />*/}
            
          
          
                {/*<textarea
                    placeholder="Descripción del Pedido"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>*/}

                {
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img 
                                src="url(https://banner2.cleanpng.com/20180414/gie/kisspng-computer-icons-restaurant-cafe-junk-food-5ad24ac5628385.4782408915237311414035.jpg)"
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>


            <button 
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Borrar Registro
            </button>

        </div>
    )
}
