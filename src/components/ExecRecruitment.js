// ExecRegistration.js
import React, { useState, useEffect } from 'react';

function ExecRecruitment() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + 'exec_registration.html')
        // fetch('public/exec_registration.html')
            .then(response => response.text())
            .then(data => setHtmlContent(data));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default ExecRecruitment;