import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { Profile } from "@/entities/Profile";
import { $api } from "@/shared/api/api";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: Profile = {
  id: "1",
  firstName: "admin",
  lastName: "admin",
  age: 45,
  currency: Currency.EUR,
  country: Country.Lithuania,
  city: "Vilnius",
  username: "admin213",
  avatar: "http://avatar",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    //we are using canEdit where id and username must be same as registered user
    user: {
      authData: { id: "1", username: "admin123" },
    },
  },
  //we are using DynamicModuleLoader and due to componentRender.tsx has asyncReducers same as StateSchema we can use asyncReducers here
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  /** UTILIZING COMPONENT RENDER BEFORE EACH TEST */
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1" />, options);
  });
  /** READONLY SWITCHING TEST */
  test("Readonly must be switched", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  /** VALUES RESTORATION TEST */
  test("If cancelled all values should be as initial", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    //clearing form fields
    await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastName"));

    //typing in form fields
    await userEvent.type(screen.getByTestId("ProfileCard.firstName"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastName"), "user");

    //Checking if form fields have values
    expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("user");

    //Click to cancel
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("admin");
  });

  /** VALIDATION ERROR TEST */
  test("Error should appear", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });

  /** ALL DATA VALID AND SENT */
  test("If no validation errors PUT request should be sent to server", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.type(screen.getByTestId("ProfileCard.firstName"), "user");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
