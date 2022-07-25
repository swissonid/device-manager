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


export interface EditDeviceProps {
  device: Device;
  trigger: JSX.Element;
  close: JSX.Element;
}

export const EditDevice = ({ device, trigger, close }: EditDeviceProps) => (
  <Dialog modal={true}>
    <DialogTrigger asChild>

      {trigger}

    </DialogTrigger>
    <DialogOverlay className='overlay flex flex-col justify-center items-center'>
      <DialogContent className='bg-surface rounded max-w-xl p-4 '>
        <DialogTitle className='text-lg font-bold pb-4'>
          Edit {device.model}
        </DialogTitle>
        <DialogDescription className='font-light'>
          Make changes to Mobile device here. Click save when you&apos;re done.
        </DialogDescription>
        <DialogClose asChild>
          {close}
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </Dialog>
);


