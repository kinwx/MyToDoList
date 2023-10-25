const textMonth = (numberMonth) => {
    switch(numberMonth) {
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5:
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
        case 13:
            return 'Janeiro';
            break;
    };
};
const date = new Date();
const textDate = `${date.getDate()} de ${textMonth(date.getMonth() + 1)} de ${date.getFullYear()}`;

export const DateDisplay = ({ setTaskList }) => {
    const clearList = () => {
        localStorage.setItem('Tasks', JSON.stringify([]));
        setTaskList([]);
    };

    return (
        <div className="date">
            <p><b>Data:</b> { textDate } </p>
            <button type="button" onClick={clearList}>Limpar</button>
        </div>
    );
};