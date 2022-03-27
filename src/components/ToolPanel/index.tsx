import * as React from 'react';
import { TextEditorProps } from '../../types';
import { useEditorApi } from '../../utils/context';
import { EditorApi } from '../../utils/hooks/useEditor';
import { InlineStyle } from '../TextEditor/config';

import b from '../../assets/img/B.svg'
import s from '../../assets/img/S.svg'
import i from '../../assets/img/I.svg'
import u from '../../assets/img/U.svg'

const INLINE_STYLES_CODES = Object.values(InlineStyle);

export const ToolPanel: React.FC = () => {
    const { toggleInlineStyle, hasInlineStyle } = useEditorApi();

    return (
        <div className="tool-panel">
            {INLINE_STYLES_CODES.map((code) => {
                const onMouseDown = (e: any) => {
                    e.preventDefault();
                    toggleInlineStyle(code);
                };

                return (
                    <button
                        key={code}
                        className={`tool-panel__item ${hasInlineStyle(code)} tool-panel__item_active`}
                        onMouseDown={onMouseDown}
                    >
                        {code === 'BOLD' && <img src={b} alt="b" />}
                        {code === 'ITALIC' && <img src={i} alt="b" />}
                        {code === 'UNDERLINE' && <img src={u} alt="b" />}
                        {code === 'STRIKETHROUGH' && <img src={s} alt="b" />}
                    </button>
                );
            })}
        </div>
    );
};
