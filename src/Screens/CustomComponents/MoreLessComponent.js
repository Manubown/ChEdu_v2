import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const MoreLessComponent = props => {
  const [more, setMore] = React.useState(false);

  return (
    <Text>
      {!more ? props.truncatedText : props.fullText}

      <TouchableOpacity onPress={() => setMore(!more)}>
        <Text style={{color: '#007aff'}}>
          {more ? ' Read less...' : ' Read more...'}
        </Text>
      </TouchableOpacity>
    </Text>
  );
};

export default MoreLessComponent;
