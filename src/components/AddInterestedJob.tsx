import { useState } from "react";
import { Button } from "../../components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/select";
import { locations } from "../constant";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addInterestedJob } from "../rtk/features/user/jobInterestSlice";
import { RootState } from "../rtk";

// Define your validation schema
const schema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  location: yup.string().required("Location is required"),
});

export function AddInterestedJob() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const job_interests = useSelector(
    (state: RootState) => state.jobInterests.jobList
  );

  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    dispatch(addInterestedJob({ ...data, id: job_interests.length + 1 }));
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="bg-blue-700 text-white hover:bg-blue-900 text-sm"
          disabled={job_interests.length === 5}
        >
          {job_interests.length === 0 ? "Add Job" : "Add More Job"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add Interested Job</DialogTitle>
            <DialogDescription>
              Add interested job by filling the form below. Click save when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="jobTitle" className="text-right">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                placeholder="Enter job title"
                className="col-span-3"
                {...register("jobTitle")}
              />
            </div>
            {errors.jobTitle && (
              <span className="text-red-600">{errors.jobTitle.message}</span>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations?.map(
                        (location: { id: number; name: string }) => (
                          <SelectItem key={location.id} value={location.name}>
                            {location.name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            {errors.location && (
              <span className="text-red-600">{errors.location.message}</span>
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-700 text-white hover:bg-blue-900"
            >
              Save Job
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
