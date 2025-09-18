import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import Admonition from '@theme/Admonition';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ModuleAdmonition(props) {
    return (
        <Admonition type="tip"
                    icon={<FontAwesomeIcon icon="fa-puzzle-piece" size="2x" />}
                    title="Module"
                    className="admonition-module"
        >
            {props.children}
        </Admonition>
    );
}

function ColorBoxDangerAdmonition(props) {
    return (
        <Admonition type="danger"
                    icon={<FontAwesomeIcon icon="fa-bomb" size="2x" />}
                    title="Danger">
            {props.children}
        </Admonition>
    );
}

function ColorBoxWarningAdmonition(props) {
    return (
        <Admonition type="warning"
                    icon={<FontAwesomeIcon icon="fa-triangle-exclamation" size="2x" />}
                    title="Warning">
            {props.children}
        </Admonition>
    );
}

function ColorBoxNoteAdmonition(props) {
    return (
        <Admonition type="info"
                    icon={<FontAwesomeIcon icon="fa-book" size="2x" />}
                    title="Note">
            {props.children}
        </Admonition>
    );
}

function ColorBoxTipAdmonition(props) {
    return (
        <Admonition type="tip"
                    icon={<FontAwesomeIcon icon="fa-lightbulb" size="2x" />}
                    title="Tip">
            {props.children}
        </Admonition>
    );
}

function ColorBoxExampleAdmonition(props) {
    return (
        <Admonition type="note"
                    icon={<FontAwesomeIcon icon="fa-dice" size="2x" />}
                    title="Example">
            {props.children}
        </Admonition>
    );
}


function CommandAdmonition(props) {
  return (
    <Admonition type="tip"
                icon={<FontAwesomeIcon icon="fa-keyboard" size="2x" />}
                title="Command"
                className="admonition-command"
    >
        {props.children}
    </Admonition>
  );
}

function JobAdmonition(props) {
  return (
      <Admonition type="tip"
                  icon={<FontAwesomeIcon icon="fa-clock" size="2x" />}
                  title="Job"
                  className="admonition-job"
      >
        {props.children}
      </Admonition>
  );
}

function ConfigAdmonition(props) {
  return (
      <Admonition type="tip"
                  icon={<FontAwesomeIcon icon="fa-gear" size="2x" />}
                  title="Config"
                  className="admonition-config"
      >
        {props.children}
      </Admonition>
  );
}

function PlaceholderAdmonition(props) {
    return (
        <Admonition type="tip"
                    icon={<FontAwesomeIcon icon="fa-fill-drip" size="2x" />}
                    title="Placeholder"
                    className="admonition-placeholder"
        >
            {props.children}
        </Admonition>
    );
}

function ArgumentTypeAdmonition(props) {
    return (
        <Admonition type="tip"
                    icon={<FontAwesomeIcon icon="fa-fill-drip" size="2x" />}
                    title="Argument Type"
                    className="admonition-argument-type"
        >
            {props.children}
        </Admonition>
    );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'command': CommandAdmonition,
  'job': JobAdmonition,
  'config': ConfigAdmonition,
  'module': ModuleAdmonition,
  'colorbox-danger': ColorBoxDangerAdmonition,
  'colorbox-warning': ColorBoxWarningAdmonition,
  'colorbox-note': ColorBoxNoteAdmonition,
  'colorbox-tip': ColorBoxTipAdmonition,
  'colorbox-example': ColorBoxExampleAdmonition,
  'placeholder': PlaceholderAdmonition,
  'argument-type': ArgumentTypeAdmonition,
};

export default AdmonitionTypes;
