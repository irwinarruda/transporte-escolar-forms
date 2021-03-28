import React from 'react';
import { Container } from './styles';
import CityId from './CityId';
import GeneralData from './GeneralData';
import Fleet from './Fleet';
import Route from './Route';
import Management from './Management';
import Regulation from './Regulation';
import OpenQuestions from './OpenQuestions';

const PageId = {
    city_id: CityId,
    general_data: GeneralData,
    fleet: Fleet,
    route: Route,
    management: Management,
    regulation: Regulation,
    open_questions: OpenQuestions,
};

export default function Managers() {
    const [page, setPage] = React.useState('city_id');
    const [formData, setFormData] = React.useState({});

    const FormLayout = PageId[page || 'city_id'];

    React.useEffect(() => {
        console.log('Esse é o formdata', formData);
    }, [formData]);

    return (
        <Container>
            <FormLayout
                page={page}
                setPage={setPage}
                formData={formData}
                setFormData={setFormData}
            />
        </Container>
    );
}
