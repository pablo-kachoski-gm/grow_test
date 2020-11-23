const buildTitle = ({ title, data }) => {
    const fullTitle = [title];
    const { peopleName, planetName } = data;
    peopleName
        ? fullTitle.push(peopleName)
        : planetName && fullTitle.push(planetName);
    return fullTitle.join(" ");
};

export default buildTitle