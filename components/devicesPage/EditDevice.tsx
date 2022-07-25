import { Device } from './device.model';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { PrimaryButton, SecondaryButton } from '../Button/Buttons';

export interface EditDeviceProps {
  device: Device;
  child: JSX.Element;
}

export function EditDevice() {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <button type="button">edit</button>
      </DialogTrigger>
      <DialogOverlay className="overlay flex flex-col justify-center items-center">
        <DialogContent className="bg-surface rounded max-w-xl p-4">
          <DialogTitle className="text-lg font-bold pb-4">
            Edit Device
          </DialogTitle>
          <DialogDescription>
            Make changes to Mobile device here. Click save when you're done.
          </DialogDescription>
          <DialogClose asChild>
            <div className="flex w-full justify-end mt-8 gap-2">
              <SecondaryButton child="cancel" />
              <PrimaryButton child="Save" />
            </div>
          </DialogClose>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
