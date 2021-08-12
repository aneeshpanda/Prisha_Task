import { Doughnut } from 'react-chartjs-2';

const data = canvas => {
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient();

    return {
        datasets: [{
            backgroundColor: "green",
        }],
    };
}

function Commission() {
    return (
        <div>
            <Doughnut data={{data}} />
        </div>
    );
}

export default Commission