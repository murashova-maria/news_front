import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from '../../utils/context';
import { TextEditorProps } from '../../types';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';


export const TextEditor: React.FC<TextEditorProps> = ({ className }) => {
  const { state, onChange } = useEditorApi();
  
  return (
    <div className={`text-editor ${className}`}>
      <Editor
        placeholder="Enter your text"
        editorState={state}
        onChange={onChange}
        blockRenderMap={BLOCK_RENDER_MAP}
        customStyleMap={CUSTOM_STYLE_MAP}
      />
    </div>
  );
}