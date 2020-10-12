import React, {useState, useEffect, createRef} from 'react';
import {Category, CategoryTitle, CategoryWrapper} from '../../StyledComponents/productsItems'
import { useClientWindow } from "../../Hooks/useClientWindow";



const Categories = ({ categories, toggleCategory, active }) => {
    const catLength = categories.length;
    const [elRefs, setElRefs] = React.useState([]);
    const [fitDevice, setFitDevice] = useState(null);
    const window = useClientWindow();

    useEffect(() => {
      setElRefs((elRefs) =>
        Array(catLength)
          .fill()
          .map((_, i) => elRefs[i] || createRef())
      );
    }, [categories]);
  
    useEffect(() => {
      if (elRefs.length > 0 && elRefs[0].current !== null) {
        const margin = window.innerWidth < 640 ? 8 : 32; //hardcoded the margins
        setFitDevice(
          elRefs
            .map((el) => el.current.offsetWidth)
            .reduce((a, b, index) => a + b + margin * index) <= window.innerWidth
        );
      }
    }, [elRefs]);

  
    const catTitles = categories.map((category, index) => (
      <Category
        ref={elRefs[index]}
        key={category.id}
        onClick={() => toggleCategory(category.id)}
      >
        <CategoryTitle active={category.id === active}>
          {category.label}
        </CategoryTitle>
      </Category>
    ));
    return <CategoryWrapper fitDisplay={fitDevice}>{catTitles}</CategoryWrapper>;
  };

  export default Categories