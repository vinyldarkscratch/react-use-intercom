import * as React from 'react';
import styled from 'styled-components';

import { IntercomProvider, useIntercom } from '../../../.';

import { Button } from '../common';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Item = styled.div`
  display: grid;
  grid-template-rows: min-content;

  &::after {
    content: '';
    margin: 2rem 0 1.5rem;
    border-bottom: 2px solid var(--grey);
    width: 100%;
  }
`;

const RawUseIntercomPage = () => {
  const {
    boot,
    shutdown,
    hardShutdown,
    update,
    hide,
    show,
    showMessages,
    showNewMessages,
    getVisitorId,
    trackEvent,
  } = useIntercom();
  const handleBoot = React.useCallback(() => boot(), [boot]);

  const handleSeededBoot = React.useCallback(() => boot({ name: 'Russo' }), [
    boot,
  ]);

  const handleExtendedSeededBoot = React.useCallback(
    () =>
      boot({
        name: 'Russo',
        action_color: 'red',
        email: 'russo@email.com',
        utm_content: 'content',
        vertical_padding: 10,
        alignment: 'left',
        avatar: {
          type: 'image',
          image_url: 'https://github.com/devrnt/react-use-intercom',
        },
        company: {
          company_id: 'company',
          created_at: 'now',
          industry: 'industry',
          monthly_spend: 10,
          name: 'name',
          plan: 'plan',
          size: 12,
          user_count: 100,
          website: 'https://github.com/devrnt/react-use-intercom',
        },
        companies: [
          {
            company_id: 'company',
            created_at: 'now',
            industry: 'industry',
            monthly_spend: 10,
            name: 'name',
            plan: 'plan',
            size: 12,
            user_count: 100,
            website: 'https://github.com/devrnt/react-use-intercom',
          },
        ],
        background_color: 'green',
        created_at: 'now',
        custom_launcher_selector: '.id',
        hide_default_launcher: false,
        horizontal_padding: 10,
        language_override: 'en',
        phone: '0470',
        session_duration: 1000,
        unsubscribed_from_emails: false,
        user_hash: '123',
        last_request_at: 'now',
        utm_campaign: 'campaign',
        utm_source: 'source',
        utm_medium: 'medium',
        utm_term: 'term',
        user_id: '12345',
          my_custom_attribute: 'custom_attribute_value',
          my_second_custom_attribute: 'second_custom_attribute_value',
      }),
    [boot],
  );

  const handleUpdate = React.useCallback(() => {
    update();
  }, [update]);

  const handleSeededUpdate = React.useCallback(() => {
    update({ name: 'ponas' });
  }, [update]);

  const handleNewMessages = React.useCallback(() => showNewMessages(), [
    showNewMessages,
  ]);

  const handleNewMessagesWithContent = React.useCallback(
    () => showNewMessages('pre-definded-content'),
    [showNewMessages],
  );

  const handleGetVisitorId = React.useCallback(() => {
    const id = getVisitorId();
    setVisitorId(id);
  }, [getVisitorId]);

  const handleTrackEvent = React.useCallback(() => {
    trackEvent('invited-friend');
  }, [trackEvent]);

  const handleTrackEventWithMetaData = React.useCallback(() => {
    trackEvent('invited-friend', { name: 'Russo' });
  }, [trackEvent]);

  const [visitorId, setVisitorId] = React.useState<string | null>(null);

  return (
    <Grid>
      <Item>
        <p>
          boots the Intercom instance, not needed if <code>autoBoot</code> in{' '}
          <code>IntercomProvider</code> is <code>true</code>
        </p>
        <Button label="Boot" data-cy="boot" onClick={handleBoot} />
      </Item>
      <Item>
        <p>
          boots the Intercom instance with given <code>props</code>
        </p>
        <Button
          label="Boot props"
          data-cy="boot-seeded"
          onClick={handleSeededBoot}
        />
      </Item>
      <Item>
        <p>
          boots the Intercom instance with given extended <code>props</code>
        </p>
        <Button
          label="Boot extended props"
          data-cy="boot-extended-seeded"
          onClick={handleExtendedSeededBoot}
        />
      </Item>
      <Item>
        <p>shuts down the Intercom instance</p>
        <Button label="Shutdown" data-cy="shutdown" onClick={shutdown} />
      </Item>
      <Item>
        <p>
          same functionality as <code>shutdown</code>, but makes sure the
          Intercom cookies, <code>window.Intercom</code> and{' '}
          <code>window.intercomSettings</code> are removed
        </p>
        <Button
          label="Shutdown hard"
          data-cy="shutdown-hard"
          onClick={hardShutdown}
        />
      </Item>
      <Item>
        <p>Initiates a 'ping'</p>
        <Button label="Update" data-cy="update" onClick={handleUpdate} />
      </Item>
      <Item>
        <p>
          updates the Intercom instance with the supplied <code>props</code>
        </p>
        <Button
          label="Update with props"
          data-cy="update-seeded"
          onClick={handleSeededUpdate}
        />
      </Item>
      <Item>
        <p>shows the Messenger</p>
        <Button label="Show" data-cy="show" onClick={show} />
      </Item>
      <Item>
        <p>hides the Messenger</p>
        <Button label="Hide messages" data-cy="hide" onClick={hide} />
      </Item>
      <Item>
        <p>shows the Messenger with the message list</p>
        <Button
          label="Show messages"
          data-cy="show-messages"
          onClick={showMessages}
        />
      </Item>
      <Item>
        <p>shows the Messenger as if a new conversation was just created.</p>
        <Button
          label="Show new messages"
          data-cy="show-new-messages"
          onClick={handleNewMessages}
        />
      </Item>
      <Item>
        <p>
          hows the Messenger as if a new conversation was just created with the
          prefilled content
        </p>
        <Button
          label="Show new messages with content"
          data-cy="show-messages-content"
          onClick={handleNewMessagesWithContent}
        />
      </Item>
      <Item>
        <p>gets the visitor id </p>
        <Button
          label="Get visitor id"
          data-cy="visitorId"
          onClick={handleGetVisitorId}
        />
      </Item>
      <Item>
        <p>
          submits an <code>event</code>{' '}
        </p>
        <Button label="Track event" onClick={handleTrackEvent} />
      </Item>
      <Item>
        <p>
          submits an <code>event</code> with <code>metadata</code>
        </p>
        <Button
          label="Track event with metadata"
          onClick={handleTrackEventWithMetaData}
        />
      </Item>

      {visitorId && <p data-cy="visitorIdValue">{visitorId}</p>}
    </Grid>
  );
};

const UseIntercomPage = () => {
  return (
    <IntercomProvider appId="jcabc7e3">
      <RawUseIntercomPage />
    </IntercomProvider>
  );
};

export default UseIntercomPage;
