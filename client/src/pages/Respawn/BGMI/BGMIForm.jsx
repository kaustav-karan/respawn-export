import React, { useState } from 'react';
import { Divider } from '@mui/material';
import {
  FormContainer,
  FormInput,
  FormSectionHeading,
  StyledPlayersDetailsSection,
} from './styledComponents';

export default function BGMIForm({ players = 1 }) {
  const [formState, setFormState] = useState({});
  return (
    <div>
      <h3>Register for BGMI</h3>
      <FormContainer>
        <FormSectionHeading>Team Details</FormSectionHeading>
        <div className="row g-2">
          <FormInputWithLabel
            id="teamName"
            label="Team Name"
            className="col-md-6"
            required
          />
        </div>
        <PlayersDetailsSection players={players} />
      </FormContainer>
    </div>
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

function PlayersDetailsSection({ players = 2 }) {
  return (
    <StyledPlayersDetailsSection>
      <FormSectionHeading>Players Details</FormSectionHeading>

      {Array.from({ length: players }, (v, i) => i + 1).map(
        (playerNumber, idx) => (
          <div key={playerNumber}>
            <h5>Player {playerNumber}</h5>
            <div className="row g-2 py-2">
              <FormInputWithLabel
                id="inGameName"
                label="In Game Name"
                className="col-md-4"
                required
              />
              <FormInputWithLabel id="name" label="Name" className="col-md-4" />
              <FormInputWithLabel
                id="email"
                type="email"
                label="Email"
                className="col-md-4"
                required
              />
              <FormInputWithLabel
                id="phone"
                type="number"
                label="Phone"
                className="col-md-4"
                required
              />
            </div>
          </div>
        ),
      )}
    </StyledPlayersDetailsSection>
  );
}
