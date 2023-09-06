import React, { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ValorantForm from './Valorant/ValorantForm';
import { games } from './respawn-utils';
import { RespawnContainer } from './styledComponents';
import { changeMainBackgroundImage } from '@/features/user/userSlice';

export default function RespawnPage() {
  const { game } = useParams();
  const FormComponent = useMemo(() => games?.[game]?.formComponent, [game]);
  const dispatch = useDispatch();

  useEffect(() => {
    games?.[game]?.backgroundImage
      ? dispatch(
          changeMainBackgroundImage({
            type: 'remove',
          }),
        )
      : dispatch(
          changeMainBackgroundImage({
            type: 'set',
            payload: { backgroundImage: games?.[game]?.backgroundImage },
          }),
        );
  }, [game]);

  return FormComponent ? (
    <RespawnContainer>
      <FormComponent players={games?.[game]?.players} />
    </RespawnContainer>
  ) : (
    <Navigate to="/respawn" />
  );
}
