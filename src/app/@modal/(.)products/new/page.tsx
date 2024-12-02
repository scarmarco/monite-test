"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Modal, Checkbox, TextInput, Button } from "@/components";
import { UnitsDropdown } from "./UnitsDropdown";

export default function NewProduct() {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(event.currentTarget);
      event.preventDefault();
      formData.entries().forEach((data) => console.log(data));
      router.back();
    },
    [router],
  );

  return (
    <Modal>
      <div className="w-[576px]">
        <h2 className="font-semibold text-center mb-10">Add new product</h2>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="flex gap-12 mb-8">
            <div className="flex items-center gap-2">
              <Checkbox id="product" name="type" type="radio" defaultChecked />
              <label htmlFor="product">Product</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="service" name="type" type="radio" />
              <label htmlFor="service">Service</label>
            </div>
          </div>
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="productName"
            >
              Product name
            </label>
            <TextInput type="text" name="productName" id="productName" />
          </div>
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <TextInput type="text" id="description" name="description" />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-1" htmlFor="units">
              Units
            </label>
            <UnitsDropdown id="units" name="units" />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-1" htmlFor="price">
              Unit price (net)
            </label>
            <TextInput type="text" id="price" />
          </div>
          <div className="mb-20">
            <label className="block text-sm font-semibold mb-1" htmlFor="vat">
              VAT
            </label>
            <div className="relative">
              <select
                name="vat"
                id="vat"
                defaultValue="16%"
                className="appearance-none w-full border-2 border-gray-100 bg-white rounded-lg pl-3 pr-7 py-2 outline-blue-400"
              >
                <option value="16%">16%</option>
              </select>
              <ChevronDownIcon
                className="size-4 text-gray-400 absolute right-2"
                style={{ top: "calc(50% - 0.5rem)" }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="secondary" type="button" onClick={onDismiss}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
