import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const ActionPopupContainer = styled.dialog<{ theme?: string,$id:string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  background-color: #0b2227;
  border:none;
  width: 204px;
  align-items: center;
  left: -160px;
  border-radius: 20px;
  color: #96adb3;
  z-index: 100;
  padding: 12px 0px;
  top: ${props=>(parseInt(props.$id)%10)<=4?"25px":""};
  bottom: ${props=>(parseInt(props.$id)%10)>=5?"25px":""};
  
`;

function ActionPopup({setActionModalShow,rowId}:{setActionModalShow:any,rowId:string}) {
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
    <ActionPopupContainer $id={rowId} ref={popupRef}>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">Export</p>
      </div>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">Export statistics</p>
      </div>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">Export Overview</p>
      </div>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">Export Highlights</p>
      </div>
      <div className="d-flex gap-0 flex-column">
        <p className="mb-3">Export Conversation</p>
      </div>
    </ActionPopupContainer>
  );
}

export default ActionPopup;
