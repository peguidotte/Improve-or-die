import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const DynamicJsonLoader = ({ folder, diff, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Monta o caminho do JSON com base no folder e na dificuldade (em minúsculo)
    import(`../data/${folder}/${diff.toLowerCase()}.json`)
      .then((module) => {
        setData(module.default || module);
      })
      .catch((err) =>
        console.error(`Erro ao importar ../data/${folder}/${diff.toLowerCase()}.json`, err)
      );
  }, [folder, diff]);

  return data ? children(data) : <div>Loading...</div>;
};

DynamicJsonLoader.propTypes = {
  folder: PropTypes.string.isRequired,
  diff: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default DynamicJsonLoader;