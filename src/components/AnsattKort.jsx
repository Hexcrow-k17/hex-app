import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export default function AnsattKort(ansattinfo){
    return(
        <div className="ansattkort m-10 border-2 border-black p-5" >
            <strong><FontAwesomeIcon icon={faUser} /> {ansattinfo.navn} </strong>
            <p> <FontAwesomeIcon icon={ faPhone } /> {ansattinfo.tlf} </p>
            <p><FontAwesomeIcon icon={faEnvelope} /> {ansattinfo.epost} </p>
        </div>
    )
}
