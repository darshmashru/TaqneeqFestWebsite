// import React, { useEffect } from 'react';

// function ExecRecruitment() {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "https://tally.so/widgets/embed.js";
//         script.onload = () => {
//             if(window.Tally) {
//                 window.Tally.loadEmbeds();
//             }
//         }
//         document.body.appendChild(script);
//     }, []);

//     return (
//         <>
//         {/* <script src="https://tally.so/widgets/embed.js"></script> */}
//         <iframe data-tally-src="https://tally.so/embed/w8LlpY?alignLeft=1&dynamicHeight=1" loading="lazy" width="100%" height="1146" frameborder="0" marginheight="0" marginwidth="0" title="Executive Registrations"></iframe>
//         </>
//     )
// }

// export default ExecRecruitment;

import React, { useEffect } from 'react';

function ExecRecruitment() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.onload = () => {
            if(window.Tally) {
                window.Tally.loadEmbeds();
            }
        }
        document.body.appendChild(script);
    }, []);

    return (
        <div style={{ paddingTop: '100px' }}> {/* Adjust this value based on the height of your navbar */}
            {/* <script src="https://tally.so/widgets/embed.js"></script> */}
            <iframe data-tally-src="https://tally.so/embed/w8LlpY?alignLeft=1&dynamicHeight=1" loading="lazy" width="100%" height="1146" frameborder="0" marginheight="0" marginwidth="0" title="Executive Registrations"></iframe>
        </div>
    )
}

export default ExecRecruitment;