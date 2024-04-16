import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ActionImage } from '../CustomTable/TableComponent';
import ImageRender from '../ImageRender';

const ButtonPopupContainer = styled.dialog<{ theme?: string, $id: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  position: absolute;
  background-color: #0b2227;
  border:none;
  width: 204px;
  left: -160px;
  border-radius: 20px;
  color: #96adb3;
  z-index: 100;
  padding: 12px 15px;
  top: ${props => (parseInt(props.$id) % 10) <= 4 ? "25px" : ""};
  bottom: ${props => (parseInt(props.$id) % 10) >= 5 ? "25px" : ""};
  
`;

function ButtonPopup({ setActionModalShow, rowId }: { setActionModalShow: any, rowId: string }) {
  const popupRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {

        setActionModalShow(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ButtonPopupContainer $id={rowId} ref={popupRef}>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">More actions</p>
      </div>
      <div className="d-flex justify-start gap-0 flex-row">
        <ActionImage  style={{ marginRight: '10px' }} >
          <ImageRender fileName='/import.svg' />
        </ActionImage>
        <text>Export</text>
      </div>
      <div className="d-flex justify-start flex-row">
        <ActionImage  style={{ marginRight: '10px' }} >
        <ImageRender fileName='/note-2.svg' />
        </ActionImage>
        <text>Read</text>
      </div>
      <div className="d-flex justify-start flex-row">
        <ActionImage  style={{ marginRight: '10px' }} >
        <ImageRender fileName='/message.svg' />
        </ActionImage>
        <text>Feedback</text>
      </div>
    </ButtonPopupContainer>
  );
}

export default ButtonPopup;
