import React from 'react';
import { Container } from './styles';
import SelectTest from './SelectTest';
import CityId from './CityId';

const PageId = {
    select_test: SelectTest,
    city_id: CityId,
};

export default function Managers() {
    const [page, setPage] = React.useState('select_test');
    const [formData, setFormData] = React.useState({});

    const FormLayout = PageId[page || 'select_test'];

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
