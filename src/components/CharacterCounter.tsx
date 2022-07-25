import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "../store/textAtom";

interface ICharacterCounterProps {}

interface ITextInput {}

const TextInput: React.FunctionComponent<ITextInput> = ITextInput => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo : {text}
    </div>
  );
};

interface ICharacterCount {}
const CharacterCount: React.FunctionComponent<ICharacterCount> = props => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count} </>;
};

const CharacterCounter: React.FunctionComponent<
  ICharacterCounterProps
> = props => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CharacterCounter;
