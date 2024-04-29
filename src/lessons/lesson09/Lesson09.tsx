import { ChangeEvent, useEffect, useState } from 'react';
import {
    InputExample,
    Lesson09Component,
    Result
  } from './styles';
  
  function Lesson09() {
    
    const [inputValue,setInputValue] = useState<string>('');
    const [inputValue2,setInputValue2] = useState<string>('');
    const [activity,setActivity] = useState<string>('')

    const onChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onChangeInput2 = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    }

    // (https://catfact.ninja/fact)

    
    const getActivity = async() => {
      try{
      const response = await fetch('https://www.boredapi.com/api/activity')
      const result = await response.json();

      if(!response.ok){
        throw Object.assign(new Error('API Error '), {
          response: result
        });
      } else {
        setActivity(result.activity);
      }
    }catch(error){
      console.log(error)
    }
    }

    

    useEffect(()=> {
        console.log("Mounting");
        getActivity();
    }, []);

    useEffect(()=> {
        console.log("Updating");
        if (!!activity) {
          getActivity();
        }
    }, [inputValue, inputValue2]);

   

     useEffect(() => {
        return ()=> {
            console.log('Unmouting')
        }
     }, []);
   
    //console.log("render");
    
// onChange: () => 
    return (
      <Lesson09Component>
        <InputExample name="example" placeholder='example text' onChange={onChangeInput}/>
        <InputExample name="example2" placeholder='example text2' onChange={onChangeInput2}/>
        <Result>{inputValue}</Result>
        <Result>{inputValue2}</Result>
        <Result>{activity}</Result>
      </Lesson09Component>
    )
  }
  
  export default Lesson09;