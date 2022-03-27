import { EditorState, RichUtils } from 'draft-js';
import * as React from 'react';
import { BlockType, InlineStyle } from '../../components/TextEditor/config';
 
export type EditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
  toggleBlockType: (blockType: BlockType) => void;
  currentBlockType: BlockType;
  toggleInlineStyle: any,
  hasInlineStyle: any
}

export const useEditor = (html?: string): EditorApi => {
  const [state, setState] = React.useState(() => EditorState.createEmpty());

  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
  }, []);

  const currentBlockType = React.useMemo(() => {
    /* Шаг 1 */
    const selection = state.getSelection();
    /* Шаг 2 */
    const content = state.getCurrentContent();
    /* Шаг 3 */
    const block = content.getBlockForKey(selection.getStartKey());
    /* Шаг 4 */
    return block.getType() as BlockType;
  }, [state]);

  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
  }, []);

  const hasInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    /* Получаем иммутабельный Set с ключами стилей */
    const currentStyle = state.getCurrentInlineStyle();
    /* Проверяем содержится ли там переданный стиль */
    return currentStyle.has(inlineStyle);
  }, [state]);
  
  return React.useMemo(() => ({
    state,
    toggleInlineStyle,
    hasInlineStyle,
    toggleBlockType,
    currentBlockType,
    onChange: setState
  }), [state])
}