import React from 'react';
import { Container } from './styles';
import SchoolId from './SchoolId';
import Operation from './Operation';
import Impact from './Impact';
import OpenQuestions from './OpenQuestions';

const PageId = {
    school_id: SchoolId,
    operation: Operation,
    impact: Impact,
    open_questions: OpenQuestions,
};

export default function Directors() {
    const [page, setPage] = React.useState('school_id');
    const [formData, setFormData] = React.useState({});

    const FormLayout = PageId[page];

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
