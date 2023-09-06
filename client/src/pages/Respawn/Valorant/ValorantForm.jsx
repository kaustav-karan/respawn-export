import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { games } from '@/pages/Respawn/respawn-utils';
import {
  FormContainer,
  FormInput,
  FormSectionHeading,
  IDImage,
  ImageButtonContainer,
  ImagePlaceholder,
  StyledPlayersDetailsSection,
} from './styledComponents';
import { toBase64 } from '../utils';
import PostRespawn from '@/services/PostRespawn';

export default function ValorantForm({ players = 1 }) {
  const { game } = useParams();
  const idImageInputRef = useRef(null);
  const [formState, setFormState] = useState({});
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSaveFormData = useCallback(async () => {
    const { imgFile, ...toSubmit } = formState;
    console.log(toSubmit);
    await PostRespawn(toSubmit, games?.[game]?.postApi);
    setShowSubmitDialog(false);
  }, [game, showSubmitDialog]);

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        setShowSubmitDialog(true);
      }
    },
    [game],
  );

  const handleImageUpload = useCallback(
    async (event) => {
      const file = event.target.files[0];
      const binFile = await toBase64(file);
      setImageUrl(URL.createObjectURL(file));
      setFormState((prev) => ({ ...prev, imgfile: binFile }));
    },
    [game],
  );

  const handleChange = useCallback(
    (event) => {
      setFormState((prev) => ({
        ...prev,
        [event.target.id]:
          event.target.type === 'number'
            ? Number(event.target.value || 0)
            : event.target.value,
      }));
    },
    [game],
  );

  const handleCloseDialog = useCallback(() => {
    setShowSubmitDialog(false);
  }, [game]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div>
      <h3>Register for {games?.[game]?.title}</h3>
      <FormContainer onSubmit={handleSubmit}>
        <FormSectionHeading>Team Details</FormSectionHeading>
        <div className="row g-2">
          <FormInputWithLabel
            id="teamName"
            value={formState?.teamName}
            label="Team Name"
            className="col-md-6"
            onChange={handleChange}
            required
          />
        </div>
        <PlayersDetailsSection
          players={players}
          onChange={handleChange}
          formData={formState}
        />
        {/* <div className="col-md-6">
          <input
            id="imgfile"
            ref={idImageInputRef}
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="col-md-6"
            hidden
          />
        </div>
        {!imageUrl ? (
          <ImagePlaceholder onClick={() => idImageInputRef.current.click()}>
            Upload Identification Image
          </ImagePlaceholder>
        ) : (
          <ImageButtonContainer onClick={() => idImageInputRef.current.click()}>
            <IDImage src={imageUrl} alt="id" />
          </ImageButtonContainer>
        )} */}
        <Button variant="contained" type="submit" color="success">
          Register
        </Button>
      </FormContainer>
      <Dialog open={showSubmitDialog} onClose={handleCloseDialog}>
        <DialogTitle>Do you want to submit this response?</DialogTitle>
        <DialogActions>
          <Button color="secondary" variant="text" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            color="success"
            variant="contained"
            onClick={handleSaveFormData}
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function PlayersDetailsSection({ players = 2, onChange, formData }) {
  return (
    <StyledPlayersDetailsSection>
      <FormSectionHeading>Players Details</FormSectionHeading>

      {Array.from({ length: players }, (v, i) => i + 1).map(
        (playerNumber, idx) => (
          <div key={playerNumber}>
            <h5>Player {playerNumber}</h5>
            <div className="row g-2 py-2">
              <FormInputWithLabel
                id={`inGameName${playerNumber}`}
                value={formData?.[`inGameName${playerNumber}`]}
                label="In Game Name"
                className="col-md-4"
                onChange={onChange}
                required
              />
              <FormInputWithLabel
                id={`name${playerNumber}`}
                value={formData?.[`name${playerNumber}`]}
                label="Name"
                onChange={onChange}
                className="col-md-4"
                required
              />
              <FormInputWithLabel
                id={`email${playerNumber}`}
                value={formData?.[`email${playerNumber}`]}
                type="email"
                label="Email"
                className="col-md-4"
                onChange={onChange}
                required
              />
              <FormInputWithLabel
                id={`phone${playerNumber}`}
                value={formData?.[`phone${playerNumber}`]}
                type="number"
                label="Phone"
                className="col-md-4"
                onChange={onChange}
                required
              />
              <FormInputWithLabel
                id={`discord${playerNumber}`}
                value={formData?.[`discord${playerNumber}`]}
                type="text"
                label="Discord ID"
                className="col-md-4"
                onChange={onChange}
              />
            </div>
          </div>
        ),
      )}
    </StyledPlayersDetailsSection>
  );
}

function FormInputWithLabel({ label, className, ...rest }) {
  return (
    <div className={className}>
      <div className="d-flex flex-column justify-content-start">
        {/* {label && <label htmlFor={rest.id}>{label}</label>} */}
        <FormInput label={label} variant="outlined" {...rest} />
      </div>
    </div>
  );
}
