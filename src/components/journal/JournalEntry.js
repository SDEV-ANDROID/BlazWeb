import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body,combo1, url}) => {
    moment.locale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      }
      );
    const noteDate = moment(date);
    
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( 
            activeNote( id, {
                date, title,combo1, body, url
            })
        );
    }
    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }
        >
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/736x/18/ae/90/18ae9072f7cfd50bf4d32e0611211d66.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
                <p className="journal__entry-content">
                    { combo1 }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span> { noteDate.format('dddd') } </span>
                <h4> { noteDate.format('Do') } </h4>
            </div>


        </div>
    )
}
