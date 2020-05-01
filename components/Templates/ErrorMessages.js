import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogTitle,
  DialogContent,
  SlideAnimation,
} from 'react-native-popup-dialog';
const ErrorMessage = props => {
  return (
    <View>
      <Dialog
        visible={props.visible}
        onTouchOutside={() => {
          props.setDialogBox(false);
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="OK"
              onPress={() => {
                props.setDialogBox(false);
              }}
            />
          </DialogFooter>
        }
        dialogTitle={<DialogTitle title="Oops an error occured :(" />}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }>
        <DialogContent>
          <Text style={styles.errorMessage}>{props.errorMessage}</Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
  },
});
export default ErrorMessage;
